export const filterBySlug = (items, targetSlug) => {
    const result = items.filter(function( obj ) {
        return obj.fields.slug == targetSlug;
    });

    return result[0].fields;
}
