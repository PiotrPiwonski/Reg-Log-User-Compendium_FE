### Utworzenie pliku konfiguracyjnego dla pobierania typów z backendu

1. Utworzyć w folderze głównym plik o nazwie `tsconfig.paths.json`
2. Do pliku wkleić poniższe:

```
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
        "types": ["path_to_backend_types"]
        }
    }
}
```

3. W miejsce _path_to_backend_types_ wpisać relatywną ścieżkę do folderu z typami w backendzie.
