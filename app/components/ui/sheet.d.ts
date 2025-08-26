import { PropType } from 'vue';
type Side = 'top' | 'bottom' | 'left' | 'right';
export declare const Sheet: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    open: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<Side>;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:open"[], "update:open", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    open: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    defaultOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    side: {
        type: PropType<Side>;
        default: string;
    };
}>> & Readonly<{
    "onUpdate:open"?: ((...args: any[]) => any) | undefined;
}>, {
    open: boolean | undefined;
    defaultOpen: boolean;
    side: Side;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SheetOverlay: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SheetPortal: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SheetContent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: string;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | null, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    class: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SheetHeader: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export declare const SheetTitle: import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export {};
