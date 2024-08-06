module BABYLON {
    /**
     * Babylon windows platform pro class
     * @class WindowsPlatform - All rights reserved (c) 2020 Mackey Kinard
     */
    export class WindowsPlatform {
        /** Is xbox live user signed in if platform services enabled. (WinRT) */
        public static IsXboxLiveUserSignedIn(systemUser: Windows.System.User = null, player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): boolean {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                let user: Microsoft.Xbox.Services.System.XboxLiveUser = (systemUser != null) ? BABYLON.WindowsPlatform.GetXboxLiveSystemUser(systemUser, player) : BABYLON.WindowsPlatform.GetXboxLiveUser(player);
                return (user != null && user.isSignedIn == true);
            } else {
                return false;
            }
        }
        /** Validated sign in xbox live user if platform services available. (WinRT) */
        public static XboxLiveUserSignIn(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): void {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                BABYLON.WindowsPlatform.XboxLiveUserSilentSignIn(player, (first: Microsoft.Xbox.Services.System.SignInResult) => {
                    if (first.status === Microsoft.Xbox.Services.System.SignInStatus.userInteractionRequired) {
                        BABYLON.WindowsPlatform.XboxLiveUserDialogSignIn(player, (second: Microsoft.Xbox.Services.System.SignInResult) => {
                            if (oncomplete) oncomplete(second);
                        }, onerror, onprogress);
                    } else {
                        if (oncomplete) oncomplete(first);
                    }
                }, onerror, onprogress);
            }
        }
        /** Silent sign in xbox live user if platform services available. (WinRT) */
        public static XboxLiveUserSilentSignIn(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void> {
            return (BABYLON.Toolkit.WindowManager.IsWindows()) ? BABYLON.WindowsPlatform.GetXboxLiveUser(player).signInSilentlyAsync(null).then(oncomplete, onerror, onprogress) : null;
        }
        /** Dialog sign in xbox live user if platform services available. (WinRT) */
        public static XboxLiveUserDialogSignIn(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One, oncomplete?: (result: Microsoft.Xbox.Services.System.SignInResult) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void> {
            return (BABYLON.Toolkit.WindowManager.IsWindows()) ? BABYLON.WindowsPlatform.GetXboxLiveUser(player).signInAsync(null).then(oncomplete, onerror, onprogress) : null;
        }
        /** Loads a xbox live user profile if platform services available. (WinRT) */
        public static LoadXboxLiveUserProfile(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One, oncomplete?: (result: Microsoft.Xbox.Services.Social.XboxUserProfile) => void, onerror?: (error: any) => void, onprogress?: (progress: any) => void): Windows.Foundation.Projections.Promise<void> {
            return (BABYLON.Toolkit.WindowManager.IsWindows()) ? BABYLON.WindowsPlatform.GetXboxLiveUserContext(player).profileService.getUserProfileAsync(BABYLON.WindowsPlatform.GetXboxLiveUser(player).xboxUserId).then(oncomplete, onerror, onprogress) : null;
        }

        // ************************************** //
        // * Babylon Xbox Live Player Functions * //
        // ************************************** //

        /** Get xbox live user if platform services available. (WinRT) */
        public static GetXboxLiveUser(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): Microsoft.Xbox.Services.System.XboxLiveUser {
            let user: Microsoft.Xbox.Services.System.XboxLiveUser = null;
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                switch (player) {
                    case BABYLON.Toolkit.PlayerNumber.One:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveUserOne();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Two:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveUserTwo();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Three:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveUserThree();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Four:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveUserFour();
                        break;
                }
            }
            return user;
        }
        /** Get xbox live user if platform services available. (WinRT) */
        public static GetXboxLiveSystemUser(systemUser: Windows.System.User, player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): Microsoft.Xbox.Services.System.XboxLiveUser {
            let user: Microsoft.Xbox.Services.System.XboxLiveUser = null;
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                switch (player) {
                    case BABYLON.Toolkit.PlayerNumber.One:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveSystemUserOne(systemUser);
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Two:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveSystemUserTwo(systemUser);
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Three:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveSystemUserThree(systemUser);
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Four:
                        user = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveSystemUserFour(systemUser);
                        break;
                }
            }
            return user;
        }
        /** Get xbox live user context if platform services available. (WinRT) */
        public static GetXboxLiveUserContext(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): Microsoft.Xbox.Services.XboxLiveContext {
            let context: Microsoft.Xbox.Services.XboxLiveContext = null;
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                switch (player) {
                    case BABYLON.Toolkit.PlayerNumber.One:
                        context = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveContextOne();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Two:
                        context = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveContextTwo();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Three:
                        context = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveContextThree();
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Four:
                        context = (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveContextFour();
                        break;
                }
            }
            return context;
        }
        /** Resets xbox live user context if platform services available. (WinRT) */
        public static ResetXboxLiveUserContext(player: BABYLON.Toolkit.PlayerNumber = BABYLON.Toolkit.PlayerNumber.One): void {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                switch (player) {
                    case BABYLON.Toolkit.PlayerNumber.One:
                        (<any>window).BabylonToolkit.XboxLive.Plugin.resetXboxLiveUserContextOne()
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Two:
                        (<any>window).BabylonToolkit.XboxLive.Plugin.resetXboxLiveUserContextTwo()
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Three:
                        (<any>window).BabylonToolkit.XboxLive.Plugin.resetXboxLiveUserContextThree()
                        break;
                    case BABYLON.Toolkit.PlayerNumber.Four:
                        (<any>window).BabylonToolkit.XboxLive.Plugin.resetXboxLiveUserContextFour()
                        break;
                }
            }
        }

        // *************************************** //
        // * Babylon Xbox Live Context Functions * //
        // *************************************** //

        /** Get xbox live context property if platform services available. (WinRT) */
        public static GetXboxLiveContextProperty(name: any): any {
            return (BABYLON.Toolkit.WindowManager.IsWindows()) ? (<any>window).BabylonToolkit.XboxLive.Plugin.getXboxLiveContextProperty(name) : null;
        }
        /** Get xbox live context property if platform services available. (WinRT) */
        public static SetXboxLiveContextProperty(name: any, property: any): void {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                (<any>window).BabylonToolkit.XboxLive.Plugin.setXboxLiveContextProperty(name, property);
            }
        }
        /** Resets xbox live property context bag if platform services available. (WinRT) */
        public static ResetXboxLivePropertyContexts(): void {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                (<any>window).BabylonToolkit.XboxLive.Plugin.resetXboxLivePropertyContexts()
            }
        }

        // **************************************** //
        // * Babylon Xbox Live Sign Out Functions * //
        // **************************************** //

        /** Sets the Xbox User Sign Out Complete Handler (WinRT) */
        public static SetXboxLiveSignOutHandler(handler: (result: Microsoft.Xbox.Services.System.SignOutCompletedEventArgs) => void = null): void {
            if (BABYLON.Toolkit.WindowManager.IsWindows()) {
                (<any>window).BabylonToolkit.XboxLive.Plugin.onusersignout = handler;
            }
        }
    }
}