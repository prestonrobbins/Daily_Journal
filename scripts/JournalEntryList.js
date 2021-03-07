/*
 * Purpose:
 * To render as many journal entry components as
 * there are items in the collection exposed by the
 * data module component
 */
import { getJournalHTML } from "./JournalEntryHTML.js"
import { getJournalEntries } from "./JournalData.js"

// DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog")

// export const entryListComponent = () => {

//  const entries = getJournalEntries()

//  for (const entry of entries) {

//  entryLog.innerHTML += ???
//  }

// }


export const entryListComponent = () => {
    const entryLog = document.querySelector(".entryLog")
    let entryListHTML = ""
    const journal = getJournalEntries()
    for (const entry of journal) {
    entryListHTML += getJournalHTML(entry)
    }
    //you can use += to add to whats already there rather than erase our already existing HTML.
    entryLog.innerHTML = entryListHTML
};

//this is actually doing what we wrote
entryListComponent();