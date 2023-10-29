#include <Wire.h>
#include <Adafruit_PN532.h>


#define PN532_IRQ   (2)
#define PN532_RESET (3)


Adafruit_PN532 nfc(PN532_IRQ, PN532_RESET);

int ori(){
  digitalWrite(6,HIGH);
  delay(500);
  digitalWrite(6,LOW);
  delay(500);
}

void setup(void) {
  Serial.begin(115200);
  Serial.println("Hello!");
   pinMode(6, OUTPUT);

  nfc.begin();

  uint32_t versiondata = nfc.getFirmwareVersion();
  if (! versiondata) {
    Serial.print("Didn't find PN53x board");
    while (1); 
  }

  Serial.print("Found chip PN5"); Serial.println((versiondata >> 24) & 0xFF, HEX);
  Serial.print("Firmware ver. "); Serial.print((versiondata >> 16) & 0xFF, DEC);
  Serial.print('.'); Serial.println((versiondata >> 8) & 0xFF, DEC);

 
  nfc.SAMConfig();

  Serial.println("Waiting for an RfID Tag...");
}


void loop(void) {
  uint8_t success;
  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };  
  uint8_t uidLength;                        


  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength);

  if (success) {
  
    Serial.println("Found an RFID Tag");
    Serial.print("  UID Length: "); Serial.print(uidLength, DEC); Serial.println(" bytes");
    Serial.print("  UID Value: ");
    nfc.PrintHex(uid, uidLength);

    if (uidLength == 4) {
      // We probably have a Mifare Classic card ...
      uint32_t cardid = uid[0];
      cardid <<= 8;
      cardid |= uid[1];
      cardid <<= 8;
      cardid |= uid[2];
      cardid <<= 8;
      cardid |= uid[3];
      Serial.print("Seems to be a Mifare Classic card #");
      Serial.println(cardid);

      if (cardid==2637026564){  
        Serial.println("----------------------------\nFAKE\n----------------------------");
      Serial.println("Manufacturer:Skechers | Manufacturing Date: 9th May'2023");
      Serial.println("Retailer:\"Unauthorized Retailer\"");
      Serial.println("Customer:0xd2F14f8965470F0CE8850BFeEBFfdb257D7eE62C");
      }


      if (cardid==4254057220){
      Serial.println("----------------------------\nORIGINAL\n----------------------------");
      Serial.println("Manufacturer:Skechers | Manufacturing Date: 23rd May'2023");
      Serial.println("Retailer:B238s");
      Serial.println("Customer:0xkhre34f89654fdfdffefe850BFeEBFfdb257eE62C");
            }



      if (cardid==1552452259){
      Serial.println("----------------------------\nORIGINAL\n----------------------------");
      Serial.println("Manufacturer:Skechers | Manufacturing Date: 15th May'2023");
      Serial.println("Retailer:C287s");
      Serial.println("Customer:0xd2F14f8965470F0CE8850BFeEBFfdb257D7eE62C"); 
              }

    }
    ori();
    delay(1000);
    
    
  }
}