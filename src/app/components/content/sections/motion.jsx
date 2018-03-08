
import React from 'react';
import Prismic from 'prismic-javascript';
import {Link, RichText, Date} from 'prismic-reactjs';
import PrismicConfiguration from '../../../../../prismic-configuration';

class Motion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            doc: null
        };
    }

    componentWillMount() {
      Prismic.api(PrismicConfiguration.apiEndpoint).then(api => {
        api.query(
            Prismic.Predicates.at('document.type', 'video')
        ).then(response => {
          if (response) {
            this.setState({ doc: response.results });
          }
        });
      });
    }

    render() {
        return (
            <div className="c-section c-section--motion">
                <h2>Motion</h2>
            </div>
        );
    }
}

export default Motion
