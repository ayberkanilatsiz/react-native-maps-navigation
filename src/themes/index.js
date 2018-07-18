/**
 * @import
 */
import * as MarkerTypes from '../constants/MarkerTypes';
import * as PolylineTypes from '../constants/PolylineTypes';
import NavigationIcons from '../constants/NavigationIcons';

/**
 * defaultThemeSettings
 * @type {{[p: string]: *}}
 */
export const defaultThemeSettings = {

    /**
     * @markers
     */
    Markers: {
        [MarkerTypes.ORIGIN]: {
            icon: NavigationIcons.place,
            color: '#77dd77',
            fontSize: 40,
        },

        [MarkerTypes.DESTINATION]: {
            icon: NavigationIcons.place,
            color: '#ff4500',
            fontSize: 40,
        },

        [MarkerTypes.POSITION_DOT]: {
            icon: NavigationIcons.compassDot,
            fontSize: 30,
            color: '#387bc1'
        }
    },

    Polylines: {
        [PolylineTypes.ROUTE]: {
            fillColor: '#00b3fd',
            strokeColor: '#387bc1',
            strokeWidth: 18,
            borderWidth: 4,
        },
        [PolylineTypes.ROUTE_ALTERNATIVE]: {
            fillColor: '#cccccc',
            strokeColor: '#a0a0a0',
            strokeWidth: 18,
            borderWidth: 4,
        },
    }

};


/**
 * Theme Combiner
 * @param theme
 * @returns {*}
 */
const connectTheme = (theme) =>
{
    return Object.assign({}, defaultThemeSettings, theme);
};

/**
 * @exports
 */
export default connectTheme;

