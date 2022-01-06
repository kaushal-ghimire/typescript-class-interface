interface Bank{
    name : string;
    address : string;
    manager : string;
    contact : number;
}
function getBankDetails(bank : Bank){
       return `${bank.name}  ${bank.address} ${bank.manager} ${bank.contact}`;
}

let banker : Bank = {
    name : 'Global Ime Bank Ltd.',
    address : 'KTM',
    manager : 'Rabin Ghimire',
    contact : 9824356728

};

console.log(banker);