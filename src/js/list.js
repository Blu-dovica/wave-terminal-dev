
export class Picture {
    file
    name

    constructor(file, name) {
        this.file = file;
        this.name = name;
    }

    getFilePath = () => {
        return "./src/static/pictures/"+this.file
    }

    getName = () => {
        return this.name;
    }
}

export class Article {
    file 
    pictures
    hidden

    constructor(file, pictures, hidden = false) {
        this.file = file;
        this.pictures = pictures;
        this.hidden = hidden;
    }

    getFilePath = () => {
        return "./src/static/articles/"+this.file
    }

    getPictures = () => {
        if (this.pictures)
            return this.pictures;
        else
            return []
    }

    hasPictures = () => {
        return this.pictures && this.pictures.length > 0
    }

    isHidden = () => {
        return this.hidden;
    }

}

export class Command {
    command
    description

    constructor(command, description) {
        this.command = command
        this.description = description
    }

    print() {
        return this.command + " : " + this.description 
    }
}

export const pictures = {
    picture_1: new Picture("pTest1.txt", "picture_1"),
    picture_2: new Picture("pTest2.txt", "picture_2"),
}

export const articles = {
    test: new Article("test.txt", [pictures.picture_1, pictures.picture_2]),
}

export function listArticles() {
    let list = [];
    let keys = Object.keys(articles);
    console.log("keys", keys)
    for (var k in keys) {
        let key = keys[k]
        console.log(key, articles[key])
        if (!articles[key]?.isHidden())
            list.push(key);
    }
    return list;
}

export function getArticle(key) {
    return articles[key]
}

export function getPicture(key) {
    return pictures[key]
}


export const commands = {
    list: new Command("list", "Show the list of available articles."),
    article: new Command("article [article name]", "Show the content of the article named [article name]."),
    picture: new Command("picture [picture name]", "Display the picture named [picture name]."),
    help: new Command("help", "Show these info."),
}