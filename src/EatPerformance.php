<?php declare(strict_types=1);

namespace EatPerformance;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class EatPerformance extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
    public function getStorefrontScriptPath(): string
    {
        return 'Resources/dist/storefront/js';
    }
}