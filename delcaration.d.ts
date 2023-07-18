export { };

declare global {
    export namespace ReactNavigation {
        interface RootParamList {
            "(tabs)": { title?: string } | undefined;
            "modal": { title?: string } | undefined;
            "product-details": { title?: string } | undefined;
        }
    }
}
