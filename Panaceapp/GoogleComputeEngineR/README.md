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
## Generar API
```R 
R> gar_api_generator()
R> gar_api_generator(baseURI, http_header = c("GET", "POST", "PUT", "DELETE", "PATCH"), path_args = NULL, pars_args = NULL, 
   data_parse_function = NULL, customConfig = NULL, simplifyVector = getOption("googleAuthR.jsonlite.simplifyVector"), checkTrailingSlash = TRUE)
```
## Setup
```R 
R> gar_api_generator()
R> gar_api_generator(baseURI, http_header = c("GET", "POST", "PUT", "DELETE", "PATCH"), path_args = NULL, pars_args = NULL, 
   data_parse_function = NULL, customConfig = NULL, simplifyVector = getOption("googleAuthR.jsonlite.simplifyVector"), checkTrailingSlash = TRUE)
R> project <- "[normbre del proyecto?]"
R> zone <- "[us-west1-b?]"
R> account_key <- "[.json?]"
R> Sys.setenv(GCE_AUTH_FILE = account_key, GCE_DEFAULT_PROJECT_ID = [project?], GCE_DEFAULT_ZONE = [zone?])
R> gce_auth()
```
## Establecer proyecto global predeterminado
```
gce_global_project([project?])
gce_global_zone([zone?])
default_project <- gce_get_project([normbre del proyecto?])
```
## License & copyright
© Manuel Mena. Tetraktys | Decisiones Acertadas.