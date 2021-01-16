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

| Param name     | Type                       | Default value |
|----------------|----------------------------|---------------|
| CssClass       | string                     | -             |
| Color          | string                     | #ffffff       |
| IconAttributes | dictionary<string, object> | -             |
| Size           | int                        | 24            |
| StrokeWidth    | float                      | 1.5f          |

`CssClass` parameter allows adding CSS classes to the list of standard icon's classes. E.g.:

```
<FeatherMenu CssClass="foo bar"/>
```

will result in the generation of the following classes list in the icon element:

```
class="feather foo bar feather-menu"
```

`IconAttributes` parameter allows adding other custom HTML-tag attributes following standard Blazor practices. More information can be found here:
https://docs.microsoft.com/pl-pl/aspnet/core/blazor/components/?view=aspnetcore-5.0#attribute-splatting-and-arbitrary-parameters

### Info

Every icon name is composed `Feather{original icon name in PascalCase}`
examples
- FeatherMenu
- FeatherBell
- FeatherBookOpen

you can browse the original icon set here https://feathericons.com/