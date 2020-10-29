let json_data; // Set variable to contain the data imported from patient JSON
// Set constant refrences to the document elements in which to add data from JSON
const patient_name = document.getElementById('patient_name');
const org_name = document.getElementById('org_name');
const gender = document.getElementById('gender');
const number_condi = document.getElementById('number_condi');
const list_condi = document.getElementById('list_condi');

// Open the JSON file using Fetch and promises and set the data in the identifier key value pari to the json_data var
fetch('patients_fixed.json')
    .then(file => file.json()
    .then(
        data =>{
            json_data = data.identifier[0]
            // Add a child to the patient_name element as a text node from JSON file
            patient_name.appendChild(document.createTextNode(`${json_data.name[0].given[0]} ${json_data.name[0].family[0]}`));
            // Add a child to the organization_name element as a text node from JSON file
            org_name.appendChild(document.createTextNode(`${json_data.managingOrganization.display}`));
            // Add a child to the gender element as a text node from JSON file
            gender.appendChild(document.createTextNode(`${json_data.gender.charAt(0).toUpperCase() + json_data.gender.slice(1)}`));
            // Store the length of the condiitons array as a var as it will also be useful in the for loop
            let len_conditions = json_data.conditions.length;
            // Add a child to the number_of_conditions element as a text node from len_conditions var
            number_condi.appendChild(document.createTextNode(`${len_conditions}`));
            // Loop through each of the conditons and create a new list element, changing its unique id to be equal to the condition name and appending a text node
            // to the list element that contains the condition name as per specific index of the conditions array from the JSON
            for(let i = 0; i < len_conditions; i++){
                let cur_condition = document.createElement('li');
                cur_condition.id = json_data.conditions[i];
                cur_condition.appendChild(document.createTextNode(json_data.conditions[i]))
                list_condi.appendChild(cur_condition);
            }
        }
    )
    .catch(err => console.log(err)) // Error handeling for the json fetch
    .catch(err => console.log(err)) // Error handeling for the json fetch
);




