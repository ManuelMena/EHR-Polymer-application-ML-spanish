# Instalar Google Compute EngineR con Rstudio
```
!!! Lista de Comandos con fallas. Por favor contribuir. 
```
## Instalar Liberias y opciones
```R
R> install.packages("googleComputeEngineR")
R> install.packages("googleAuthR")
R> options("googleAuthR.client_id" = "[.apps.googleusercontent.com]")
R> options("googleAuthR.client_secret" = "[https://developers.google.com/identity/protocols/OAuth2ServiceAccount]")
R> options("googleAuthR.scopes.selected" = "[https://cran.r-project.org/web/packages/googleAuthR/vignettes/google-authentication-types.html]")
R> options("googleAuthR.scopes" = "[https://cran.r-project.org/web/packages/googleAuthR/vignettes/google-authentication-types.html]")
R> library(googleComputeEngineR)
R> library(googleAuthR)
```
## Crear credenciales
```R
R> library(googlesheets)
R> library(httr)
R> gar_create_api_skeleton(filename, api_json, format = TRUE)
R> gar_create_package(api_json, directory, rstudio = TRUE, check = TRUE, github = TRUE, format = TRUE, overwrite = TRUE)
R> file.remove('.httr-oauth') 
R> oauth2.0_token(endpoint = oauth_endpoints("google"), app = oauth_app("google"), key = getOption("googlesheets.client_id"), 
   secret = getOption("googlesheets.client_secret")),
R> scope = c("https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"), use_oob = TRUE, cache = TRUE)
R> gs_ls() 

R> library(googlesheets) 
R> options(httr_oob_default=TRUE) 
R> gs_ls()
```
## 

## 

```R
R> 
R> 
R> 
R> 
```
  

## License & copyright
© Manuel Mena. Tetraktys | Decisiones Acertadas.