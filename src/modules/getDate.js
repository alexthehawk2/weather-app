function showDate(){
    //creating date object
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = months[date.getMonth()];

    //change the date in the dom
    const element = document.querySelector('.date');
    element.innerHTML = `${day} ${month} ${year}`;
}


export default showDate;