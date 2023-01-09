// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProjectScreenshot;
        (function (TcHmiProjectScreenshot) {
            function F_SaveScreenshot() {

                //This will make a screenshot of the whole Desktop view. You can read in other elements and make a screenshot of a specific element if needed.
                var node = document.getElementById('Desktop'); 

                domtoimage.toBlob(node)
                    .then(function (blob) {
                        window.saveAs(blob, 'myScreenshot.png');
                    })
                    .catch(function (error) {
                        console.error("Something went wrong!", error);
                    });



            }
            TcHmiProjectScreenshot.F_SaveScreenshot = F_SaveScreenshot;
        })(TcHmiProjectScreenshot = Functions.TcHmiProjectScreenshot || (Functions.TcHmiProjectScreenshot = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('F_SaveScreenshot', 'TcHmi.Functions.TcHmiProjectScreenshot', TcHmi.Functions.TcHmiProjectScreenshot.F_SaveScreenshot);
