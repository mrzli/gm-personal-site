import { StyleRulesCallback, Theme } from '@material-ui/core';
import {
  ClassNameMap,
  makeStyles,
  WithStylesOptions
} from '@material-ui/styles';
import { AnyObject } from '../types/generic/generic-types';

export function useStyles<Props extends AnyObject, ClassKey extends string>(
  props: Props,
  stylesCallback: StyleRulesCallback<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): ClassNameMap<ClassKey> {
  return makeStyles<Theme, Props, ClassKey>(stylesCallback, options)(props);
}
