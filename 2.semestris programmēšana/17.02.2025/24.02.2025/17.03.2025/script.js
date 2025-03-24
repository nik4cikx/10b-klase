
var turpināt = true;

while ( turpināt )
{
let user = prompt("Turpināt ? Y/N");
if (user.toLowerCase() == "n")
{
    turpināt = false;
}

}
console.log("end while");