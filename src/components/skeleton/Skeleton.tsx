import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={340}
    viewBox="0 0 300 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="150" cy="115" r="108" />
    <rect x="60" y="237" rx="10" ry="10" width="174" height="22" />
    <rect x="52" y="275" rx="30" ry="30" width="193" height="48" />
  </ContentLoader>
)

export default Skeleton;
