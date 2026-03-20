namespace helpers {
  export function getRegExpByName(name: string) {
    // let regexplit = "/" + name + "/"; format for the reg expression
      helpers._getFactoryInstance("regularExpression", name);
      if (name.charAt(0) != "/") {
          throw "Invalid Literature "
      } else if (name.charAt(name.length - 1) != "/") {
          throw "Invalid Literature"
      }
      
      let newName = name;

      // remove leading slash
      if (newName.charAt(0) === "/") {
          newName = newName.substr(1);
      }

      // remove trailing slash
      if (newName.charAt(newName.length - 1) === "/") {
          newName = newName.substr(0, newName.length - 1);
      }

      return newName;
  }
}

//% helper=getRegExpByName
function regexp(lits: any, ... args: any[]): RegExp {
    return null;
}

