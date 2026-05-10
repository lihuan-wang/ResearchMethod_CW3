/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'Machine Learning Methods for Stock Trading Decision Support';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 * field: BibTeX field used for generating the tag clouds,
 * title: Title displayed as headline,
 * minTagFrequency: minimum frequency of a tag to be displayed.
 *
 * The default SurVis template also shows a Series tag cloud. It is removed here
 * because most journal articles do not have a legitimate BibTeX series field;
 * categories are encoded as controlled keywords instead.
 * @type {{field: string, title: string, minTagFrequency: number}[]}
 */
var tagCloudOptions = [{
  field: 'keywords',
  title: 'Keywords',
  minTagFrequency: 1
}, {
  field: 'author',
  title: 'Authors',
  minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable.
 * Keep this false for the submitted GitHub Pages version.
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle describing the paper or literature collection the data refers to.
 * Set to null to deactivate.
 */
var paper = null;

/**
 * Extra pages like an about page that will be listed in the footer and can be opened on demand.
 */
var extraPages = {
  'about': 'about.html'
};

/**
 * Custom style as path to an extra css file (leave empty if not applicable).
 * @type {string}
 */
var customStyle = '';

/**
 * Options for showing citation information. Set to null to avoid showing citation information.
 */
var citations = null;
