# `spotinst_elastigroup_aws_suspension`

Refer to the Terraform Registory for docs: [`spotinst_elastigroup_aws_suspension`](https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension).

# `elastigroupAwsSuspension` Submodule <a name="`elastigroupAwsSuspension` Submodule" id="@cdktf/provider-spotinst.elastigroupAwsSuspension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAwsSuspension <a name="ElastigroupAwsSuspension" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension spotinst_elastigroup_aws_suspension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

new elastigroupAwsSuspension.ElastigroupAwsSuspension(scope: Construct, id: string, config: ElastigroupAwsSuspensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig">ElastigroupAwsSuspensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig">ElastigroupAwsSuspensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.putSuspension">putSuspension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSuspension` <a name="putSuspension" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.putSuspension"></a>

```typescript
public putSuspension(value: IResolvable | ElastigroupAwsSuspensionSuspension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.putSuspension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isConstruct"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

elastigroupAwsSuspension.ElastigroupAwsSuspension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformElement"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformResource"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.suspension">suspension</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList">ElastigroupAwsSuspensionSuspensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.suspensionInput">suspensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `suspension`<sup>Required</sup> <a name="suspension" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.suspension"></a>

```typescript
public readonly suspension: ElastigroupAwsSuspensionSuspensionList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList">ElastigroupAwsSuspensionSuspensionList</a>

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `suspensionInput`<sup>Optional</sup> <a name="suspensionInput" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.suspensionInput"></a>

```typescript
public readonly suspensionInput: IResolvable | ElastigroupAwsSuspensionSuspension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAwsSuspensionConfig <a name="ElastigroupAwsSuspensionConfig" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.Initializer"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

const elastigroupAwsSuspensionConfig: elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#group_id ElastigroupAwsSuspension#group_id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.suspension">suspension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]</code> | suspension block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#id ElastigroupAwsSuspension#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#group_id ElastigroupAwsSuspension#group_id}.

---

##### `suspension`<sup>Required</sup> <a name="suspension" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.suspension"></a>

```typescript
public readonly suspension: IResolvable | ElastigroupAwsSuspensionSuspension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]

suspension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#suspension ElastigroupAwsSuspension#suspension}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#id ElastigroupAwsSuspension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ElastigroupAwsSuspensionSuspension <a name="ElastigroupAwsSuspensionSuspension" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension.Initializer"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

const elastigroupAwsSuspensionSuspension: elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#name ElastigroupAwsSuspension#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/elastigroup_aws_suspension#name ElastigroupAwsSuspension#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAwsSuspensionSuspensionList <a name="ElastigroupAwsSuspensionSuspensionList" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

new elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.get"></a>

```typescript
public get(index: number): ElastigroupAwsSuspensionSuspensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsSuspensionSuspension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>[]

---


### ElastigroupAwsSuspensionSuspensionOutputReference <a name="ElastigroupAwsSuspensionSuspensionOutputReference" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer"></a>

```typescript
import { elastigroupAwsSuspension } from '@cdktf/provider-spotinst'

new elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastigroupAwsSuspensionSuspension;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.elastigroupAwsSuspension.ElastigroupAwsSuspensionSuspension">ElastigroupAwsSuspensionSuspension</a>

---



