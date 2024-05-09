import { useState } from "react";
import {useEffect} from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    return (
       {}
    );
}

const [contact, setContact] = useState(null);

useEffect({})
async function setContacts(){
const response = await fetch(
    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedcontactId}"
);
const result = await response.json();
setContact(result);

}