function saveContact(){
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:Pushpa Parvat
ORG:Shri Ganesh Top Most Security Services
TITLE:Business Owner
TEL;TYPE=WORK:+918669051546
EMAIL:shriganeshtopmosts@gmail.com
ADR:;;Maharashtra;India
END:VCARD`;

  const blob = new Blob([vCard], { type: 'text/vcard' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Shri_Ganesh_Security.vcf';
  link.click();
}
