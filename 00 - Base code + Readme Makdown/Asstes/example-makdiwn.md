# EWS.PS
PowerShell function using EWS (OAuth2) to perform these operations against Exchange Online Mailboxes.

## Table of Contents

- [Functions](#functions)
- [Requirements](#requirements)
- [How To Install The Module](#how-to-install-the-module)
- [How To Uninstall The Module](#how-to-uninstall-the-module)
- [OAuth Access Token Requirement](#oauth-access-token-requirement)
- [Usage Examples](#usage-examples)

## Functions

So far there are two functions included in this module.

- [`Get-EwsFolder`](docs/Get-EwsFolder.md)
  * List ALL folders from a mailbox
  * Search a folder from mailbox by folder display name (eg. `Inbox`, `Drafts`)
  * Get a folder from mailbox by folder ID (eg. `AQMkADRmZTI3MW..`)
- [`Move-EwsItem`](docs/Move-EwsItem.md)
  * Move all mailbox items from one folder to another
  * Move mailbox items between dates from one folder to another

> *Note: These functions use OAuth token to authenticate with Exchange Online. Basic authentication using username and password is not supported*

## Requirements

- A registered Azure AD app
  * **API Name:** *Exchange*
  * **API Permission Type:** *Application*
  * **API Permission Name:** *full_access_as_app*

      ![Azure Ad Api Permission](https://raw.githubusercontent.com/junecastillote/EWS.PS/master/docs/images/AzureAdApp-API-Permissions.png)<br>A registered Azure AD App with full_access_as_app API permisson

- Windows PowerShell 5.1
- [Exchange Web Services Managed API 2.2](https://www.microsoft.com/en-us/download/details.aspx?id=42951)
- For getting access tokens, you can have either [MSAL.PS](https://www.powershellgallery.com/packages/MSAL.PS) or [ADAL.PS](https://www.powershellgallery.com/packages/ADAL.PS)

## How To Install The Module

- [Download the module](https://github.com/junecastillote/EWS.PS/archive/master.zip) and extract the ZIP file on your computer.

  ![Extract the module](https://raw.githubusercontent.com/junecastillote/EWS.PS/master/docs/images/extract_module.png)<br>Extract the module files on your computer

- Open PowerShell as Administrator, change the working directory to the location of the module.
- Run the script `.\install.ps1 -ModulePath 'C:\Program Files\WindowsPowerShell\Modules' -Verbose`

  ![Install the module](https://raw.githubusercontent.com/junecastillote/EWS.PS/master/docs/images/install_module.png)<br>Install the module

## How To Uninstall The Module

- Open PowerShell as Administrator, change the working directory to the location of the module.
- Run the script `.\uninstall.ps1 -Verbose`
![Uninstall the module](https://raw.githubusercontent.com/junecastillote/EWS.PS/master/docs/images/uninstall_module.png)<br>Uninstall the module

## OAuth Access Token Requirement

Make sure to acquire an access token first. Use the `Get-MsalToken` cmdlet or `Get-AdalToken`.

### Get Access Token Using MSAL.PS

```PowerShell
# Get MSAL Token using CLIENT ID,  CLIENT SECRET, and TENANT ID
$msalParams = @{
    ClientId = 'CLIENT ID'
    ClientSecret = (ConvertTo-SecureString 'CLIENT SECRET' -AsPlainText -Force)
    TenantId = 'TENANT ID'
    Scopes   = "https://outlook.office.com/.default"
}
$token = Get-MsalToken @msalParams
```

### Get Access Token Using ADAL.PS

```PowerShell
# Get MSAL Token using CLIENT ID,  CLIENT SECRET, and TENANT ID
$msalParams = @{
    ClientId = 'CLIENT ID'
    ClientSecret = (ConvertTo-SecureString 'CLIENT SECRET' -AsPlainText -Force)
    TenantId = 'TENANT ID'
    Resource   = "https://outlook.office.com/"
}
$token = Get-MsalToken @msalParams
```

> *Visit the [MSAL.PS GitHub](https://github.com/AzureAD/MSAL.PS) page to learn more about using MSAL.PS module to acquire OAuth access tokens.*

## Usage Examples

- [List All Folders In A Mailbox](docs/Get-EwsFolder.md#example-1--list-all-folders-in-a-mailbox)
- [Find A Folder Using Folder Name](docs/Get-EwsFolder.md#example-2--find-a-folder-using-folder-name)
- [Find A Folder Using Folder ID](docs/Get-EwsFolder.md#example-3--find-a-folder-using-folder-id)
- [Move All Items from One Folder to Another](docs/Move-EwsItem.md#example-1--move-all-items-from-one-folder-to-another)
- [Move Items Received Between Specified Dates](docs/Move-EwsItem.md#example-2--move-items-received-within-specified-dates)