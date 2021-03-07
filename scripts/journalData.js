/*
 * Journal data for Daily Journal application
 *
 * Holds the raw data about each entry and exports
 * functions that other modules can use to filter
 * the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "03/01/2021",
        concept: "CSS",
        entry: "We talked about Learned more on flex box and how to make things fit with more detail",
        mood: "Ok"
    },
    {
        id: 2,
        date: "03/04/2021",
        concept: "CSS",
        entry: "Figured out how to make circles with CSS",
        mood: "I got this"
    },
    {
        id: 3,
        date: "03/03/2021",
        concept: "HTML & CSS",
        entry: "Made an array that holds objects and can later be used to make a list in HTML",
        mood: "I got this"
    },
]
   
   /*
    You export a function that provides a version of the
    raw data in the format that you want
   */
   export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
    Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
   }