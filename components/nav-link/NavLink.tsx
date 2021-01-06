/* eslint-disable prettier/prettier */
//@ts-nocheck
import PropTypes from 'prop-types';
import Link from 'next/link';

export interface IProps {
  slug: String;
  title: String;
}

export const NavLink = (props: IProps) => {
  return (
    <Link href={props.slug}>
      <a className="btn-link btn btn-lg mr-5">{props.title}</a>
    </Link>
  );
};

NavLink.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
