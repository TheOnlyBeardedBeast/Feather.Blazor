using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Text;

namespace Feather.Blazor
{
    public class Icon : ComponentBase
    {
        [Parameter]
        public string Color { get; set; } = "#ffffff";
        [Parameter]
        public float StrokeWidth { get; set; } = 1.5f;
        [Parameter]
        public int Size { get; set; } = 24;
    }
}
