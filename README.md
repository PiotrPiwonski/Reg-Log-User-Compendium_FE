TBD 

trigger CI change


### Utworzenie pliku konfiguracyjnego dla wygodnego pobierania typów z frontendu i backendu

1. Utworzyć w folderze głównym plik o nazwie `tsconfig.paths.json`
2. Do pliku wkleić poniższe:

```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "types/frontend": [
            "./src/types/"
          ],
          "types/backend": [
            "path_to_backend_types"
          ]
        }
    }
}
```

3. W miejsce `path_to_backend_types` wpisać relatywną ścieżkę do folderu z typami w backendzie (np.: `../Reg-Log-User-Compendium_BE/src/types/`)

4. Potem można pobierać typy w ten sposób:
```ts
import { UserLoginRes } from 'types/backend';
import { AuthState, AuthActions } from 'types/frontend';
```




### Scripts to work with the App


Start/Build App:

    - start
    - build

Test App:

    - test
    - test:watch
    - test:coverage
    - test:e2e:run
    - cypress:open

Lint Code:

    - format
    - lint
    - lint:js
    - lint:types
    - lint:prettier
    - check:circular-deps

### Style Guide

Gitlab
Each merge request should have proper naming

Format Type/Task: Description

Type 'Feature' | 'Fix'

Task Jira task number

Description Task description in english



Example Feature/YPT-10887: Logout functionality
​

Each merge request should have 1 approval before merging

approvals should be given from one of development team members

​

Code writing rules
Name shortcuts

We should not use any variable shortcuts and assign descriptive names


😕 str, prevValue


😊 string, previousValue



There are few exceptions


😊 S for styles imported as styled components

import * as S from './styles



😊 project specific names

vod
npvr





Component creation

We should follow only one pattern when writing components


😕 function ComponentName() {return ()}


😊 const ComponentName = () => {return ()}



We don't want JSX.Element as component return type


😕 const ComponentName = (): JSX.Element => {return <></>}


😊 const ComponentName = () => {return (<></>)}




Constant value

All constants values should be defined in constants.ts file, even if there is only one
Constants should be all capital letters with ‘_’ separators


😕 superTime


😊 SUPER_TIME




Boolean props names

Boolean props names should start with is, has, should, etc. prefix


😕 active


😊 isActive
​



Boolean props position

We keep boolean props in the end of props list


😕 <Component isOpen={isOpen} keepMounted handleClose={handleClose}>


😊 <Component isOpen={isOpen} handleClose={handleClose} keepMounted>




Boolean casting

Boolean should be casted with Boolean() method


😕 !!value


😊 Boolean(value)
​



Conditional rendering

For conditional rendering based on variable, which is not defined as boolean, we use casting by Boolean()


😕 isBoolean && <></>


😊 Boolean(isBoolean) && <></>




Props destructuring

If there is a possibility to destructure object, let's do it


😕 const Component = (props) => {}


😊 const Component = ({ id }) => {}
​



Array type declarations

We should follow only one pattern when writing types


😕 someArray: string[]


😊 someArray: Array<string>
​



React imports

We should never not import React from 'react'


😕 React.useEffect(() => {})


😊 useEffect(() => {})
​



MaterialUI imports

We should never use named imports from MaterialUI as it slowes down development server startup time:


😕 import { Button } from '@mui/material';


😊 import Delete from '@mui/icons-material/Delete';
​



One liners

We don't want one liners


😕 if (something) return;


😊

if (something) {
return;
}






If statements

If possible we want to avoid falsy statement


😕

if (!something) {
doSomething();
}
return;




😊

if (something) {
return;
}
doSomething();





We don't want nested if statements


😕

if (something) {
if (somethingElse) {
doSomethingElse();
}
}
return;




😊

const doSomething = () => {
if (somethingElse) {
doSomethingElse()
}
}

if (something) {
doSomething();
}






Translations

We should always use react-intl package for entered text


😕 <Text>Some Title</Text>


😊 <Text>{intl.formatMessage(messages.title)}</Text>
​



Framer Motion

Framer motion states should be defined inside styles


Installed packages

We should use only strict versions of installed packages


😕 "react-dom": "^17.0.2"


😊 "react-dom": "17.0.2"



We should keep installed packages in correct structure


😕 "dependencies": { "eslint-plugin-prettier": "^4.0.0" }

😊 "devDependencies": { "eslint-plugin-prettier": "4.0.0" }




Continuous integration
TBD

Continuous deployment
TBD