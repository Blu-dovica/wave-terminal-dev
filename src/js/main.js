var currentFile;

$(function() {
    $('body').terminal({
       read: async function(filename) {
          loadArticle(filename)
       },
       ciao: function() {
        this.echo("Ciao Cosmo! Ti amo <3", { typing: true, delay: 50 })
       },
       test: async function() {
          type(test)
       },
    },
    {
        greetings: "Hello"
    });
 });

 loadArticle = async function(filename) {
    const response = await load("./src/static/articles/"+ filename + ".txt");
    type(response)
 }

 type = async function(text) {
    var split = text.split('\n')
    console.log(split)
    for (var i in split) {
        var t = split[i] ? split[i] : " "
        await $.terminal.active().echo(t, { typing: true, delay: 20 })
    }
 }
 

 load = async function(file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            console.log(text);
            return text;
        }
    } catch (e) {
        console.log(e)
    }
    return ["File not found."]
 }

 var test = "Lorem ipsum dolor sit amet, consectetur\n\nadipiscing elit. Morbi sit amet mollis orci, ultricies feugiat nisl. Donec ut iaculis nulla. Proin condimentum et lectus in sollicitudin. Nullam nec risus eget est varius auctor eu a urna. Cras pretium leo ipsum, a sodales lorem lobortis a. Nullam vel tincidunt dui, molestie sollicitudin orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non erat rhoncus, tristique arcu eget, condimentum erat. In ullamcorper purus non nisi maximus sollicitudin. Donec eu porttitor magna. Maecenas sit amet arcu ex. Praesent condimentum tempor posuere. Nunc eget consequat tellus. Morbi vel lacus non ligula ornare consectetur id ut dolor. Proin condimentum tempor quam eu interdum. Vivamus eu augue sit amet ligula rutrum venenatis quis nec magna.\n"+
 "Curabitur condimentum efficitur ultricies. Morbi vehicula sed felis vitae rhoncus. Mauris id porttitor tellus. Mauris tempor elementum nunc, a gravida lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet consectetur mauris. Nam rhoncus mauris ut nulla vestibulum congue.\n"+
 "Suspendisse a enim nec mauris facilisis varius feugiat pulvinar dui. Etiam ut maximus diam. Curabitur feugiat nunc nec nulla efficitur cursus. Integer auctor lacus vel efficitur tincidunt. Vestibulum sollicitudin nunc ac neque maximus, sit amet fringilla nunc fermentum. Nulla vel feugiat augue. Donec vitae scelerisque sem. Aliquam varius libero ut tincidunt dapibus. Vestibulum sodales ornare commodo. Nulla vulputate turpis eget rutrum pellentesque. Nulla vel nibh sem. Etiam nec consequat augue, at vehicula risus. Fusce tincidunt lorem erat, non vulputate mauris venenatis sed. Suspendisse egestas volutpat sem, sit amet ornare lectus sagittis sed. Ut nulla erat, tristique et lectus eu, porttitor ultrices tellus. Fusce posuere, est tincidunt egestas semper, ligula lacus feugiat nisl, a pharetra purus ipsum fringilla tortor. \n " +
 "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vulputate mauris ac nisi dignissim, sit amet ultrices quam pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis congue neque, et eleifend purus finibus eu. Ut porttitor ac nisi at mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla feugiat, lacus sed aliquam molestie, sapien lorem lobortis dolor, quis bibendum urna lorem ac nisi. Vestibulum gravida lacinia sodales. Vivamus nec mollis libero. Morbi in tortor pretium, tincidunt odio in, blandit justo. \n"+
 "Integer suscipit vel diam ut eleifend. Pellentesque in ornare lacus, at facilisis massa. Vestibulum ac rhoncus felis. Nunc euismod accumsan pulvinar. Aliquam erat volutpat. Nunc arcu velit, faucibus ac eros euismod, posuere consectetur tortor. Pellentesque maximus volutpat urna, iaculis facilisis est ultricies ac. Nullam hendrerit, arcu vel ornare auctor, leo lorem suscipit leo, quis hendrerit dolor eros non metus. Suspendisse ligula risus, ultricies nec accumsan vel, mattis et metus. Vivamus rutrum fermentum orci, sed suscipit nunc facilisis nec. Aenean malesuada, metus vitae viverra dapibus, orci lectus sagittis lorem, eu venenatis augue ligula id nulla. Donec sit amet massa id erat vestibulum maximus ut vitae urna. Aenean tincidunt porttitor nibh, at bibendum tellus laoreet ut. Fusce id dolor eu nulla suscipit egestas.";