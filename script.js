let persons=[{
    name:'ajay',age:25
},{
    name:'arun',age:27
}]


let namei=document.getElementById('name')
let agei=document.getElementById('age')
let table=document.getElementById('table')

let edit=-1
function handlesubmit()
{
    if(edit==-1)
    {
        let name=namei.value
        let age=agei.value
        let temp={
            name:name,age:age
        }
        persons=[...persons,temp]
        display()
        clear()
    }
    else{
        let name=namei.value
        let age=agei.value
        let temp={
            name:name,age:age
        }
        persons[edit]=temp
        display()
        clear()
        edit=-1
    }
   
}

function display()
{
    table.innerHTML=persons.map((person,i)=>`<tr>
<td>${person.name}</td>
<td>${person.age}</td>
<td><button onclick=edit1(${i}) >edit</button></td>
<td><button onClick=del(${i})>delete</button></td>
</tr>`)
}
function del(id)

{
 let temp=persons.filter((person,i)=>i!==id)
 persons=[...temp]
 display()
}

function edit1(id)

{
    let temp=persons[id]
    namei.value=temp.name
    agei.value=temp.age
    edit=id
}
function clear()
{
    namei.value=' '
    agei.value=' '
}


display()