# Feather.Blazor

## Description

Feather.Blazor svg icon components for Blazor based on https://github.com/feathericons/feather

## Usage

Download from https://www.nuget.org/packages/Feather.Blazor/

In `_Imports.razor` add the following line

```
@using Feather.Blazor.Icons
```

In you blazor components use icons like in the following line

```
<FeatherMenu Size="36" Color="#000" StrokeWidth="1.8f"/>
```
### Icon params

| Param name  | Type   | Default value |
|-------------|--------|---------------|
| Color       | string | #ffffff       |
| StrokeWidth | float  | 1.5f          |
| Size        | int    | 24            |

### Info

Every icon name is composed `Feather{original icon name in PascalCase}`
examples
- FeatherMenu
- FeatherBell
- FeatherBookOpen

you can browse the original icon set here https://feathericons.com/