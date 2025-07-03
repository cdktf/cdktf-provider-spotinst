# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-spotinst.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpotinstProvider <a name="SpotinstProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs spotinst}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

new provider.SpotinstProvider(scope: Construct, id: string, config?: SpotinstProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-spotinst.provider.SpotinstProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig">SpotinstProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags">resetFeatureFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.provider.SpotinstProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.provider.SpotinstProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFeatureFlags` <a name="resetFeatureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetFeatureFlags"></a>

```typescript
public resetFeatureFlags(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-spotinst.provider.SpotinstProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpotinstProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

provider.SpotinstProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

provider.SpotinstProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

provider.SpotinstProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.provider.SpotinstProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

provider.SpotinstProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpotinstProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpotinstProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpotinstProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.provider.SpotinstProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpotinstProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput">featureFlagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags">featureFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `featureFlagsInput`<sup>Optional</sup> <a name="featureFlagsInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlagsInput"></a>

```typescript
public readonly featureFlagsInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.featureFlags"></a>

```typescript
public readonly featureFlags: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.provider.SpotinstProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpotinstProviderConfig <a name="SpotinstProviderConfig" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-spotinst'

const spotinstProviderConfig: provider.SpotinstProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account">account</a></code> | <code>string</code> | Spotinst Account ID. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable the Spotinst provider. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags">featureFlags</a></code> | <code>string</code> | Spotinst SDK Feature Flags. |
| <code><a href="#@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token">token</a></code> | <code>string</code> | Spotinst Personal API Access Token. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Spotinst Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#account SpotinstProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#alias SpotinstProvider#alias}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable the Spotinst provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#enabled SpotinstProvider#enabled}

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.featureFlags"></a>

```typescript
public readonly featureFlags: string;
```

- *Type:* string

Spotinst SDK Feature Flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#feature_flags SpotinstProvider#feature_flags}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-spotinst.provider.SpotinstProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Spotinst Personal API Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.221.0/docs#token SpotinstProvider#token}

---



