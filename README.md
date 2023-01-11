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
