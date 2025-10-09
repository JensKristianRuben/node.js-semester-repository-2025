import fs from 'fs'

export function constructPage(pageContent, tabTitle){

    return Header.replace('$$TAB_TITLE$$', 'DogInder | Welcome')
    + pageContent
    + footer;

}