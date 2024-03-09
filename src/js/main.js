$(function() {
    $('body').terminal({
       read: async function(filename) {
          this.echo(await loadArticle(filename), { typing: true, delay: 50 })
       },
       ciao: function() {
        this.echo("Ciao Cosmo! Ti amo <3", { typing: true, delay: 50 })
       },
    },
    {
        greetings: "Hello"
    });
 });

 /*
 loadArticle = function(filename) {
    return $.get("static/articles/"+ filename + ".txt"  , function(data) {
        data.
        return data
     }, 'text');
 }
*/

 loadArticle = async function(filename) {
    try {
        const response = await fetch("src/static/articles/"+ filename + ".txt");
        const text = await response.text();
        console.log(text);
        return text;
    } catch (e) {
        console.log(e)
        return "File not found."
    }
 }
 