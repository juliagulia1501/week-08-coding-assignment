

//This is the Javascript page for the menu Week 8 coding assignment.
//The menu will be prompting the user to create a list of their favorite snacks.



// Class for the snacks that will take arguments of the name and type of the snack being input. vvvvv
class Snack{
    constructor(name,type){
        this.name = name
        this.type = type
    }

}

  //Menu class that holds all the methods needed vvv
  class Menu{
    constructor(){
        //array for the snacks given
        this.snacksArray = []
        }
    
    //this method starts the menu and gives options for the user: 1-3
    start()
    {
       let selection = this.showMainMenuOptions()
       
       while (selection != 0){
        switch(selection){
            //case 1 will create a snack for the array list.
            case '1' : 
                this.createSnack()
                break
            //case 2 will delete a snack from the array list.
            case '2' :
                this.deleteSnack()
                break
            //case 3 will display all the snacks in the array list.
            case '3' :
                this.displayAllSnacks()
                break
            //0 will exit the menu application.
            default :
                selection = 0
        }
        selection = this.showMainMenuOptions()
       }
       //after the while loop ends, goodbye pops up and ends.
       alert("Goodbye!")
    }

    //method will display the main menu options in a prompt.
    showMainMenuOptions(){
        return prompt(`
            0.) Exit
            1.) Add a snack to the snacks list.
            2.) Delete a snack from the snacks list.
            3.) Display entire snack list.
        `)
    }

    //method will display all the snacks in the array and also list the type of snack it is.
    displayAllSnacks(){
        let snackListString = ''
        //for loop to iterate through the array vvvv
        for(let i =0; i < this.snacksArray.length; i++){
            snackListString += i + `.) Name : ${this.snacksArray[i].name} / Type : ${this.snacksArray[i].type} \n`
        }
        alert("SNACK LIST" + '\n' + snackListString + "Yum!")
        
    }

    //method to create a snack by giving the name and type and adding it to the array.
    createSnack(){
        let name = prompt("Add a snack to the list: ")
        let type = prompt("What type of snack is this? (i.e. chips): ")

        //adding to the array by .push the input into the array.
        this.snacksArray.push(new Snack(name, type))
    }

    //method to delete a snack from the list of snacks.
    deleteSnack(){
        let index = prompt("Enter the index of the snack you would like to delete from the list (i.e. 0): ")
        //if statement to delete the index.
        if(index > -1 && this.snacksArray.length){
            this.snacksArray.splice(index, 1)
        }
    }

    
}

let menu = new Menu()
menu.start()


