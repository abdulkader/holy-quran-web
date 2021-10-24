import React, { Fragment } from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Container from '@/components/Container';
import { useAppContext } from '@/shared/hooks/useAppContext';
import AudioPlayer from '@/components/AudioPlayer';

const HomePage = () => {
  const { appState } = useAppContext();
  const { loading, surahs } = appState;
  console.log(surahs);
  const albums = surahs.reduce(
    (
      acc,
      {
        ayahs,
        englishName,
        englishNameTranslation,
        name,
        number,
        revelationType,
      }
    ) =>
      acc.concat(
        ayahs.reduce(
          (ac, ay) =>
            ac.concat({
              ayah: ay,
              englishName,
              englishNameTranslation,
              name,
              number,
              revelationType,
            }),
          []
        )
      ),
    []
  );
  return (
    <MainLayout>
      <Container className="flex flex-wrap justify-start">
        {loading ? (
          <div>Loading</div>
        ) : (
          <Fragment>
            <AudioPlayer albums={albums} />
          </Fragment>
        )}
      </Container>
    </MainLayout>
  );
};

export default HomePage;
