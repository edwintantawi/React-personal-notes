import React from 'react';
import { clsx } from 'clsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon, XIcon, PlusIcon } from '@heroicons/react/solid';

import { Avatar } from '../components/Avatar';
import { IconButton } from '../components/IconButton';
import { TabBar, TabBars } from '../components/Tabs';
import { Divider } from '../components/Divider';
import { InputField } from '../components/InputField';
import { Typography } from '../components/Typography';

interface Props {
  term: string;
  clearSearch: () => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function AppBar(props: Props) {
  const { term, onSearch, clearSearch } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = React.useRef<HTMLInputElement>(null);
  const [isSearch, setIsSearch] = React.useState(false);

  React.useEffect(() => {
    if (!searchRef.current) return;

    const allowedPathToSearch = ['/', '/archived'];

    if (isSearch) {
      searchRef.current.focus();
      if (allowedPathToSearch.includes(location.pathname)) return;
      navigate('/');
    }
  }, [isSearch]);

  const handleToggleSearch = () => {
    if (isSearch) clearSearch();
    setIsSearch((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 py-4 bg-white border-b">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar />
          {!isSearch && (
            <Typography component="h1" variant="sub-heading" fontWeight="bold">
              Personal Notes
            </Typography>
          )}
        </div>

        <InputField
          name="term"
          value={term}
          ref={searchRef}
          placeholder="Search notes..."
          className={clsx('flex-1', { hidden: !isSearch })}
          onChange={onSearch}
        />

        <div className="flex items-center gap-2">
          <IconButton label={isSearch ? 'close search' : 'search'} onClick={handleToggleSearch}>
            {isSearch ? <XIcon /> : <SearchIcon />}
          </IconButton>
        </div>
      </div>

      <TabBars>
        <TabBar to="/new" aria-label="add note">
          <PlusIcon className="w-5 h-5" />
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/" fullWidth>
          Notes
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/archived" fullWidth>
          Archived
        </TabBar>
      </TabBars>
    </header>
  );
}

export { AppBar };
