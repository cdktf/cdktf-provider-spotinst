# `spotinst_multai_listener`

Refer to the Terraform Registory for docs: [`spotinst_multai_listener`](https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener).

# `multaiListener` Submodule <a name="`multaiListener` Submodule" id="@cdktf/provider-spotinst.multaiListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MultaiListener <a name="MultaiListener" id="@cdktf/provider-spotinst.multaiListener.MultaiListener"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener spotinst_multai_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

new multaiListener.MultaiListener(scope: Construct, id: string, config: MultaiListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig">MultaiListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig">MultaiListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags"></a>

```typescript
public putTags(value: IResolvable | MultaiListenerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig"></a>

```typescript
public putTlsConfig(value: MultaiListenerTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

multaiListener.MultaiListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

multaiListener.MultaiListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

multaiListener.MultaiListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList">MultaiListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference">MultaiListenerTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerIdInput">balancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerId">balancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tags"></a>

```typescript
public readonly tags: MultaiListenerTagsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList">MultaiListenerTagsList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: MultaiListenerTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference">MultaiListenerTlsConfigOutputReference</a>

---

##### `balancerIdInput`<sup>Optional</sup> <a name="balancerIdInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerIdInput"></a>

```typescript
public readonly balancerIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MultaiListenerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: MultaiListenerTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.balancerId"></a>

```typescript
public readonly balancerId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.multaiListener.MultaiListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MultaiListenerConfig <a name="MultaiListenerConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

const multaiListenerConfig: multaiListener.MultaiListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.balancerId">balancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#port MultaiListener#port}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#protocol MultaiListener#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#id MultaiListener#id}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `balancerId`<sup>Required</sup> <a name="balancerId" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.balancerId"></a>

```typescript
public readonly balancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#port MultaiListener#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#protocol MultaiListener#protocol}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#id MultaiListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MultaiListenerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#tags MultaiListener#tags}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: MultaiListenerTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#tls_config MultaiListener#tls_config}

---

### MultaiListenerTags <a name="MultaiListenerTags" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

const multaiListenerTags: multaiListener.MultaiListenerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#key MultaiListener#key}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#value MultaiListener#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#key MultaiListener#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#value MultaiListener#value}.

---

### MultaiListenerTlsConfig <a name="MultaiListenerTlsConfig" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

const multaiListenerTlsConfig: multaiListener.MultaiListenerTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.cipherSuites">cipherSuites</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.maxVersion">maxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#max_version MultaiListener#max_version}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.minVersion">minVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#min_version MultaiListener#min_version}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.preferServerCipherSuites">preferServerCipherSuites</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.sessionTicketsDisabled">sessionTicketsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}. |

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}.

---

##### `cipherSuites`<sup>Required</sup> <a name="cipherSuites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.cipherSuites"></a>

```typescript
public readonly cipherSuites: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}.

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.maxVersion"></a>

```typescript
public readonly maxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#max_version MultaiListener#max_version}.

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#min_version MultaiListener#min_version}.

---

##### `preferServerCipherSuites`<sup>Required</sup> <a name="preferServerCipherSuites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.preferServerCipherSuites"></a>

```typescript
public readonly preferServerCipherSuites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}.

---

##### `sessionTicketsDisabled`<sup>Required</sup> <a name="sessionTicketsDisabled" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig.property.sessionTicketsDisabled"></a>

```typescript
public readonly sessionTicketsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.122.1/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### MultaiListenerTagsList <a name="MultaiListenerTagsList" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

new multaiListener.MultaiListenerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get"></a>

```typescript
public get(index: number): MultaiListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MultaiListenerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a>[]

---


### MultaiListenerTagsOutputReference <a name="MultaiListenerTagsOutputReference" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

new multaiListener.MultaiListenerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MultaiListenerTags | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTags">MultaiListenerTags</a> | cdktf.IResolvable

---


### MultaiListenerTlsConfigOutputReference <a name="MultaiListenerTlsConfigOutputReference" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer"></a>

```typescript
import { multaiListener } from '@cdktf/provider-spotinst'

new multaiListener.MultaiListenerTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuitesInput">cipherSuitesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersionInput">maxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersionInput">minVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuitesInput">preferServerCipherSuitesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabledInput">sessionTicketsDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuites">cipherSuites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersion">maxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersion">minVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuites">preferServerCipherSuites</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabled">sessionTicketsDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIdsInput"></a>

```typescript
public readonly certificateIdsInput: string[];
```

- *Type:* string[]

---

##### `cipherSuitesInput`<sup>Optional</sup> <a name="cipherSuitesInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuitesInput"></a>

```typescript
public readonly cipherSuitesInput: string[];
```

- *Type:* string[]

---

##### `maxVersionInput`<sup>Optional</sup> <a name="maxVersionInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersionInput"></a>

```typescript
public readonly maxVersionInput: string;
```

- *Type:* string

---

##### `minVersionInput`<sup>Optional</sup> <a name="minVersionInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersionInput"></a>

```typescript
public readonly minVersionInput: string;
```

- *Type:* string

---

##### `preferServerCipherSuitesInput`<sup>Optional</sup> <a name="preferServerCipherSuitesInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuitesInput"></a>

```typescript
public readonly preferServerCipherSuitesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionTicketsDisabledInput`<sup>Optional</sup> <a name="sessionTicketsDisabledInput" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabledInput"></a>

```typescript
public readonly sessionTicketsDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

---

##### `cipherSuites`<sup>Required</sup> <a name="cipherSuites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.cipherSuites"></a>

```typescript
public readonly cipherSuites: string[];
```

- *Type:* string[]

---

##### `maxVersion`<sup>Required</sup> <a name="maxVersion" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.maxVersion"></a>

```typescript
public readonly maxVersion: string;
```

- *Type:* string

---

##### `minVersion`<sup>Required</sup> <a name="minVersion" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.minVersion"></a>

```typescript
public readonly minVersion: string;
```

- *Type:* string

---

##### `preferServerCipherSuites`<sup>Required</sup> <a name="preferServerCipherSuites" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.preferServerCipherSuites"></a>

```typescript
public readonly preferServerCipherSuites: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionTicketsDisabled`<sup>Required</sup> <a name="sessionTicketsDisabled" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.sessionTicketsDisabled"></a>

```typescript
public readonly sessionTicketsDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MultaiListenerTlsConfig;
```

- *Type:* <a href="#@cdktf/provider-spotinst.multaiListener.MultaiListenerTlsConfig">MultaiListenerTlsConfig</a>

---



