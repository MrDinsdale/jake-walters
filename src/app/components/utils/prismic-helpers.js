import Prismic from 'prismic-javascript';
import PrismicConfiguration from '../../../../prismic-configuration';

export const getCustomType = (type) => {
    Prismic.api(PrismicConfiguration.apiEndpoint).then(api => {
        api.query(
            Prismic.Predicates.at('document.type', type)
        ).then(response => {
            if (response) {
                return response.results[0]
            }

            return 'error'
        });
    });
}

export default {
    getCustomType
}