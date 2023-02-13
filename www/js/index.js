function create() {
    console.log( "create notepad" );
    document.getElementById( "creator" ).style.display = "none";
    if ( one == "none" ) {
        document.getElementById( "note" ).style.display = "block";
    } else if ( one == "block" ) (
        document.getElementById( "element" ).style.display = "none"
    )
    document.getElementById( "note" ).style.display = "block";
    var one = document.getElementById( "element" ).style.display;

}

var note = document.getElementById( "note" );
var creator = document.getElementById( "creator" );
var element = document.getElementById( "retrieveRecords" );

function times() {
    document.getElementById( "note" ).style.display = "none";
}

function openNav() {
    document.getElementById( "mySideNav" ).style.width = "250px";
}

function closenav() {
    document.getElementById( "mySideNav" ).style.width = "0";
}

function show() {
    document.getElementById( "retrieveRecords" ).style.display = "none";
    document.getElementById( "creator" ).style.display = "block";
    document.getElementById( "deleted" ).style.display = "none";
}

function save() { //This stores the information in Window.localstorage
    console.log( "save information" )
    var content = document.getElementById( "content" ).value;
    let key = document.getElementById( "title" ).value;
    const notepad = {
        "Title": key,
        "content": content
    };
    window.localStorage.setItem( key, JSON.stringify( notepad ) ); // Converting Object to string
    alert( "Saved" );
}

function view() { // This retrieves information from the local storage
    let key = document.getElementById( 'retrievekey' ).value;
    console.log( "Retrieve information" );
    var records = window.localStorage.getItem( key );
    var divs = document.createElement( "div" );
    var paragraph = document.createElement( "p" );
    var infor = document.createTextNode( records );
    var element = document.getElementById( "retrieveRecords" );
    divs.appendChild( paragraph );
    paragraph.appendChild( infor );
    element.appendChild( paragraph );
}

function clearHistory() { //This clears a specified key given by the user
    console.log( "Clear title" );
    let rem = document.getElementById( "rem" ).value;
    var records = window.localStorage.getItem( rem );
    let divs = document.createElement( "div" );
    let paragraph = document.createElement( "p" );
    let infor = document.createTextNode( records );
    let put = document.getElementById( "deleted" );
    divs.appendChild( paragraph );
    paragraph.appendChild( infor );
    put.appendChild( paragraph );
    window.localStorage.removeItem( rem );
}

function clearAll() { // This clears all input data given by the user
    console.log( "Clear all history" );
    window.localStorage.clear();
}

function viewHistory() {
    let recs = document.getElementById( "retrieveRecords" );
    recs.style.display = "block";
    document.getElementById( "creator" ).style.display = "none";
    if ( two == "none" ) {
        document.getElementById( "element" ).style.display = "block";
    } else if ( two == "block" ) (
        document.getElementById( "note" ).style.display = "none"
    );
    var two = document.getElementById( "note" ).style.display;
    document.getElementById( "deleted" ).style.display = "none";
}

function viewOldHistory() {
    let reCoil = document.getElementById( "deleted" );
    reCoil.style.display = "block";
    document.getElementById( 'creator' ).style.display = "none";
    document.getElementById( "retrieveRecords" ).style.display = "none";
}