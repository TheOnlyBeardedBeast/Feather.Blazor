using Microsoft.AspNetCore.Components;
using System.Collections.Generic;

namespace Feather.Blazor
{
    public class Icon : ComponentBase
    {
        [Parameter]
        public string Color { get; set; } = "currentColor";
        [Parameter]
        public float StrokeWidth { get; set; } = 1.5f;
        [Parameter]
        public int Size { get; set; } = 24;
        [Parameter]
        public string CssClass { get; set; }
        [Parameter(CaptureUnmatchedValues = true)]
        public Dictionary<string, object> IconAttributes { get; set; }
    }
}
