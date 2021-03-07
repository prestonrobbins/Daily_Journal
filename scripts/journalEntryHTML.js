export const getJournalHTML = (entry) => {
    return `
        <div class="journalCardHTML">
            <h3 class="entryDateHTML">${entry.date}</h3>
            <h3 class="entryConceptHTML">${entry.concept}</h3>
            <p class="entryTextHTML">${entry.entry}</p>
            <p class="entryMoodHTML">${entry.mood}</p>
        </div>
    `
}

// export const getJournalHTML = () => {
//     return journalHTML()
// } 


