// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProjectScreenshot;
        (function (TcHmiProjectScreenshot) {
            function F_SaveScreenshotVirtualDir() {

                //This will make a screenshot of the whole Desktop view. You can read in other elements and make a screenshot of a specific element if needed.
                var node = document.getElementById('Desktop');

                domtoimage.toPng(node)
                    .then(function (dataUrl) {
                        let image = dataUrl.slice(22); //remove 'data:image/png;base64,' from the dataUrl before saving the png
                        if (TcHmi.Server.isWebsocketReady()) {
                           
                            var request = {
                                'requestType': 'ReadWrite',
                                'commands': [
                                    {
                                        "symbol": "Upload",
                                        "commandOptions": [
                                            "SendWriteValue",
                                            "SendErrorMessage"
                                        ],
                                        "writeValue": {
                                            "chunkType": 0,
                                            "fileName": "/test/myScreenshotName.png", //saves to the virtual directory path that you need to define in the TcHmiSrv
                                            "data": String(image)
                                        }
                                    }
                                ]
                            };
                            // Send request to TwinCAT HMI Server.
                            TcHmi.Server.requestEx(request, { timeout: 2000 }, function (data) {
                                console.log(data);
                                // Callback handling.
                                if (data.error !== TcHmi.Errors.NONE) {
                                    // Handle TcHmi.Server class level error here.
                                    return;
                                }
                                var response = data.response;
                                if (!response || response.error !== undefined) {
                                    // Handle TwinCAT HMI Server response level error here.
                                    return;
                                }
                                var commands = response.commands;
                                if (commands === undefined) {
                                    return;
                                }
                                for (var i = 0, ii = commands.length; i < ii; i++) {
                                    var command = commands[i];
                                    if (command === undefined) {
                                        return;
                                    }
                                    if (command.error !== undefined) {
                                        // Handle TwinCAT HMI Server command level error here.
                                        return;
                                    }
                                    // Handle result...
                                    TcHmi.Log.debug(command.symbol + '=' + command.readValue);
                                }
                            });
                        }

                    })
                    .catch(function (error) {
                        console.error("Something went wrong!", error);
                    });


            }
            TcHmiProjectScreenshot.F_SaveScreenshotVirtualDir = F_SaveScreenshotVirtualDir;
        })(TcHmiProjectScreenshot = Functions.TcHmiProjectScreenshot || (Functions.TcHmiProjectScreenshot = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('F_SaveScreenshotVirtualDir', 'TcHmi.Functions.TcHmiProjectScreenshot', TcHmi.Functions.TcHmiProjectScreenshot.F_SaveScreenshotVirtualDir);
