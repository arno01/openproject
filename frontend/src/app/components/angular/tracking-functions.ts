import {HalResource} from 'core-app/modules/hal/resources/hal-resource';

export namespace AngularTrackingHelpers {
  export function halHref<T extends HalResource>(_index:number, item:T):string|null {
    return item.$href;
  }

  export function compareByName<T extends HalResource>(a:T|undefined|null, b:T|undefined|null):boolean {
    const bothNil = !a && !b;
    return bothNil || (!!a && !!b && a.name === b.name);
  }

  export function compareByHref<T extends HalResource>(a:T|undefined|null, b:T|undefined|null):boolean {
    const bothNil = !a && !b;
    return bothNil || (!!a && !!b && a.$href === b.$href);
  }

  export function compareByHrefOrString<T extends HalResource>(a:T|string|undefined|null, b:T|string|undefined|null):boolean {
    if (a instanceof HalResource && b instanceof HalResource) {
      return compareByHref(a as HalResource, b as HalResource);
    }

    const bothNil = !a && !b;
    return bothNil || a === b;
  }
}
