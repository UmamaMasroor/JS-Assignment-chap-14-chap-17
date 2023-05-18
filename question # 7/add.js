// question 7
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('<h2> Qualifications:</h2>');
document.write('<ol>');
for (let i = 0; i < qualification.length; i++) {
  document.write('<li>' + qualification[i] + '</li>');
}
document.write('</ol>');
