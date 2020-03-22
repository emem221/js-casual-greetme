var name = prompt('Hey Curious Mind, Enter Your Name');
var today = new Date();
var hrs = today.getHours();
document.writeln('<b>');
document.writeln('<b>');
if (hrs <= 12) {
    document.writeln('Good Morning, ' + name + '.' + ' ' + 'Did you sleep well?');
} else if (hrs <= 18) {
    document.writeln('Good Afternoon, ' + name + '.' + ' ' + 'How is your day going so far?');
} else {
    document.writeln('Good evening, ' + name + '. ' + ' ' + 'Had a pleasant day today?');
}
document.write('<br/>')