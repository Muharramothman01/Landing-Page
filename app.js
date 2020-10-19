/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const navbar__list = document.querySelector('#navbar__list'); //  declare the unordered list using its ID 

for ( let i = 1;i<=4;i++ )
{
    let list = document.createElement('li');         // Using 'for loop' for creating lists

    list.setAttribute('class','menu__link');         // Setting attribute class for lists and their value is 'menu__link'

    list.setAttribute('id',`section${i}`);           // Setting attribute ID for lists and their value is `section${i}`  

    list.textContent = `Section ${i}`;               // Setting textContent to lists and their value is `Section${i}`
                                                    
                                                     // Note i is the index of the loop that initial value is 1 
                                                    
    navbar__list.appendChild(list);                  // Append the lists in unordered list

}


function window_scroll(e)        // Setting function for scrolling and active the list and active the section
{
   let id_li = e.target.id;      // Declare variable id_li to save the id of lists using the target 

   const sections = document.querySelectorAll('section'); // Declare variable 'sections' to select section tags

   const list_tags = document.querySelectorAll('li'); // Declare variable 'list_tags' to select list tags

   for(const index_colors of list_tags) // Using 'for of ... loop' to loop the nodeList of list tags to active the list using class '.active'
   {
        if(id_li == index_colors.getAttribute('id'))  // Using 'if ... else condition' to compare the equlity between the id_li variable and the id of list
        {
           index_colors.classList.add('active'); // Adding the class '.active' to list to active the list when it clicked 
        }

        else
        {
            index_colors.classList.remove('active'); // Remove the class from the other list that is  unclicked
        }
   }
   for(const remover of sections) // Using 'for of ... loop' to remove the class '.your-active-class' from all section tags

   {
       remover.classList.remove('your-active-class'); // To remove the class '.your-active-class' from all section tags
   }

   for(const id_sections of sections) // Using 'for of ... loop' to scroll into the section when i click to the section list and add the class '.your-active-class' 
   {
       if(id_sections.getAttribute('id') == id_li) // Using 'if ... else condition' to compare the equlity between the id_li variable and the id of section tag 
       {
           id_sections.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}); // to scroll to the section

           id_sections.classList.add('your-active-class'); // to add the class '.your-active-class' to the section 
           
           break; // to break the loop
       }

       else
       {
           continue; // to skip to next index
       }

    }
    

}

navbar__list.addEventListener('click',window_scroll); // Using event listener on the navbar_list (Unordered list) with event 'click' and the function 'window_scroll'

