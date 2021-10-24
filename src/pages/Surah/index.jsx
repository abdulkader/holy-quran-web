import React, { Fragment } from 'react';
import MainLayout from '@/components/Layouts/MainLayout';
import Container from '@/components/Container';
import { useAppContext } from '@/shared/hooks/useAppContext';
import AudioPlayer from '@/components/AudioPlayer';
import { useRouter } from '@/shared/hooks/useRouter';

const SurahPage = () => {
  const router = useRouter();
  const { surahId } = router.params;
  const { appState } = useAppContext();
  const { loading, surahs } = appState;
  let albums = null;
  const album =
    surahs?.find((itm) => parseFloat(itm.number) === parseFloat(surahId)) ||
    null;
  if (album) {
    const {
      ayahs,
      englishName,
      englishNameTranslation,
      name,
      number,
      revelationType,
    } = album;
    albums = ayahs.reduce(
      (acc, ayah) =>
        acc.concat({
          ayah,
          englishName,
          englishNameTranslation,
          name,
          number,
          revelationType,
        }),
      []
    );
  }
  return (
    <MainLayout>
      <Container className="flex flex-wrap justify-start">
        {loading ? (
          <div>Loading</div>
        ) : (
          <Fragment>
            {albums ? (
              <AudioPlayer albums={albums} />
            ) : (
              'No Surah found for the url'
            )}
          </Fragment>
        )}
      </Container>
    </MainLayout>
  );
};

export default SurahPage;
