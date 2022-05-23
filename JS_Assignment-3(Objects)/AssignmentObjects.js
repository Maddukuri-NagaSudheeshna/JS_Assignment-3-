//1.----------------------------------------------------------------

var Rectangle = function(width,height) 
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRectangle1 = new Rectangle(22,50); //calling objects/making intances
var myRectangle2 = new Rectangle(15,30);
var myRectngle3 = new Rectangle(25,50);
var myRectngle4 = new Rectangle(30,60);

console.log(myRectangle1.width); //calling object's properties
console.log(myRectangle1.height);
myRectangle1.area();
console.log("---------------------");

console.log(myRectangle2.width); //calling object's properties
console.log(myRectangle2.height);
myRectangle2.area();
console.log("---------------------")
console.log(myRectangle3.width); //calling object's properties
console.log(myRectangle3.height);
myRectangle3.area();
console.log("---------------------")
console.log(myRectangle4.width); //calling object's properties
console.log(myRectangle4.height);
myRectangle4.area();
console.log("---------------------")




//2.---------------------------------------------------------------------------------------------------
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRectangle1.getArea(); 
myRectangle2.getArea();
myRectangle3.getArea();
myRectngle4.getArea();


//3.-----------------------------------------------------------------------------------------------------

Rectangle.prototype.getAreaForRect = function(width,height)  
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRectangle1.getAreaForRect(6,3); 
myRectangle2.getAreaForRect(10,5);
myRectangle3.getAreaForRect(9,10);
myRectngle4.getAreaForRect(11,2);


//4.-------------------------------------------------------------------------------------------------
var obj1 = {
    firstName : "Maddukuri",
    lastName : "Naga Sudheeshna"
};
console.log(obj1);

//5.---------------------------------------------------------------------------------------------------

var obj2 = {
    firstName 	:  "Maddukuri",
    middleName  : "Naga",
    lastName    :   "Sudheeshna"
};
console.log(obj2);


//6.Create a string with what looks like an object with firstName and lastName,use eval() property.

var myString = new String('2 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));




//8.Creating a Person dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Maddukuri","Naga Sudheeshna",24,['C#','.net'],"02/08/1998",{city:"hyderabad",pincode:534340},"false","Analyst");
Person2 = new Person("Revathi","Chowdary",26,["Nodejs","Javascript"],"08/05/1997",{city:"Banglore",pincode:657700},"false","Consultant");

console.log(Person1);
console.log(Person2);

print=function()       
{
    console.log(Person1);
    console.log(Person2);
}();



//9 .Abhishek and Amithab program
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Amithabh = new Person("Amithabh","Bacchan",22,['java','c#'],"01/01/1998",{city:"Mumbai",pincode:456783},"false","JrAnalyst");
Abhishek = new Person("Abhishek",26,["html","css"],"05/06/1996","false","srAnalyst");
Aaradhya = new Person("Aaradhya",10,"01/01/2003","false","cinema");

var Abhishek = Object.create(Amithabh); 
var Aaradhya = Object.create(Abhishek);  

print = function()
{
    console.log(Amithabh);
    console.log(Abhishek.lastName);
    console.log(Abhishek.address);
    console.log(Aaradhya.lastName);
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);
    console.log(Aaradhya.firstName);
}();



//10.Bank Account Application

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log(" Please deposit some amount to withdraw later, Now Please take ur card out!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(445642465,"Sudheeshna",34464);
console.log(obj1);


var objSavings = new Savings("true",23343,"revan",453524); 
console.log(objSavings);
console.log(objSavings.withdraw(33422));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(293,2334325,"rishiv",4326436); 
console.log(objCurrent);
console.log(objCurrent.withdraw(30303));
console.log(objCurrent.getCurrentBalance());
